import iconCollapseGroup from '@ui5/webcomponents-icons/dist/collapse-group.js';
import iconDecline from '@ui5/webcomponents-icons/dist/decline.js';
import iconExpandGroup from '@ui5/webcomponents-icons/dist/expand-group.js';
import iconNavigationDownArrow from '@ui5/webcomponents-icons/dist/navigation-down-arrow.js';
import iconNavigationUpArrow from '@ui5/webcomponents-icons/dist/navigation-up-arrow.js';
import iconSearch from '@ui5/webcomponents-icons/dist/search.js';
import {
  CssSizeVariables,
  enrichEventWithDetails,
  ThemingParameters,
  useI18nBundle,
  useSyncRef
} from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import React, { forwardRef, ReactNode, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { ButtonDesign, TableMode } from '../../enums';
import { CANCEL, OK, RESET, SEARCH, SELECT_ALL } from '../../i18n/i18n-defaults';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import {
  Button,
  Dialog,
  DialogDomRef,
  DialogPropTypes,
  Icon,
  Input,
  ListPropTypes,
  Table,
  TableCell,
  TableColumn,
  TableRow,
  Title
} from '../../webComponents';

const useStyles = createUseStyles(
  {
    dialog: {
      '&::part(header)': {
        paddingBottom: '0.25rem',
        flexDirection: 'column',
        marginBottom: 0
      },
      '&::part(content)': {
        padding: 0
      }
    },
    headerContent: {
      display: 'grid',
      gridTemplateColumns: 'fit-content(100px) minmax(0, 1fr) fit-content(100px)',
      gridTemplateAreas: `
      "titleStart titleCenter cancel"
      "input input input"
      `,
      gridTemplateRows: `${CssSizeVariables.sapWcrDialogHeaderHeight} ${CssSizeVariables.sapWcrDialogSubHeaderHeight}`,
      width: '100%',
      alignItems: 'center'
    },
    title: {
      fontSize: ThemingParameters.sapFontLargeSize,
      fontFamily: ThemingParameters.sapFontHeaderFamily,
      gridColumnStart: 'titleStart',
      gridColumnEnd: 'titleCenter',
      maxWidth: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    titleCenterAlign: {
      gridArea: 'titleCenter',
      justifySelf: 'center'
    },
    hiddenClearBtn: {
      gridArea: 'titleStart',
      visibility: 'hidden'
    },
    clearBtn: {
      gridArea: 'cancel',
      justifySelf: 'end'
    },
    input: {
      gridArea: 'input',
      width: '100%'
    },
    footer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'end',
      width: '100%',
      boxSizing: 'border-box',
      '& > *': {
        marginInlineStart: '0.5rem'
      }
    },
    inputIcon: { cursor: 'pointer', color: ThemingParameters.sapContent_IconColor }
  },
  { name: 'P13nDialog' }
);

export interface P13nDialogPropTypes
  extends Omit<DialogPropTypes, 'header' | 'headerText' | 'footer' | 'children' | 'onReset'> {
  /**
   * Defines the list items of the component.
   *
   * __Note:__ Although this prop accepts all HTML Elements and therefore also all list items, it is strongly recommended that you only use `StandardListItem` in order to preserve the intended design.
   */
  items: unknown[];
  /**
   * Render Item
   */
  renderItem: (item: unknown) => ReactNode | ReactNode[];
  /**
   * This flag controls whether the Clear button is shown. When set to `true`, it provides a way to clear selections. We recommend enabling the Clear button in cases where a mechanism to delete the selection is required: In single selection mode (default mode) or when `rememberSelections` is set to `true`.
   */
  showResetButton?: boolean;
  /**
   * Defines the header text.
   */
  headerText?: string;
  /**
   * Defines props you can pass to the internal `List` component.
   *
   * __Note:__ `mode`, `children`, `onLoadMore` and `footerText` are not supported.
   */
  listProps?: Omit<ListPropTypes, 'mode' | 'children' | 'footerText' | 'onLoadMore'>;
  /**
   * This event will be fired when the value of the search field is changed by a user - e.g. at each key press
   */
  onSearchInput?: (event: Ui5CustomEvent<HTMLInputElement, { value: string }>) => void;
  /**
   * This event will be fired when the search button has been clicked or the ENTER key has been pressed in the search field.
   */
  onSearch?: (event: Ui5CustomEvent<{ value: string }>) => void;
  /**
   * This event will be fired when the clear button has been clicked.
   */
  onReset?: (event: Ui5CustomEvent<{ prevSelectedItems: HTMLElement[] }>) => void;
  /**
   * This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode.
   */
  onOk?: (event: Ui5CustomEvent<{ selectedItems: HTMLElement[] }>) => void;
  /**
   * This event will be fired when the cancel button is pressed
   */
  // onCancel?: (event: Ui5CustomEvent<{ selectedItems: HTMLElement[] }>) => void;
}

/**
 * The SelectDialog enables users to filter a comprehensive list via a search field and to select one or more items.
 */
const P13nDialog = forwardRef<DialogDomRef, P13nDialogPropTypes>((props, ref) => {
  const {
    items,
    renderItem,
    className,
    headerText,
    listProps,
    showResetButton,
    onAfterClose,
    onReset,
    onOk,
    //onCancel,
    onSearch,
    onSearchInput,
    onBeforeOpen,
    onAfterOpen,
    ...rest
  } = props;

  const classes = useStyles();
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const [searchValue, setSearchValue] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [componentRef, selectDialogRef] = useSyncRef(ref);

  const handleBeforeOpen = (e) => {
    if (typeof onBeforeOpen === 'function') {
      onBeforeOpen(e);
    }
  };

  const handleAfterOpen = (e) => {
    if (typeof onAfterOpen === 'function') {
      onAfterOpen(e);
    }
  };

  const handleSearchInput = (e) => {
    if (typeof onSearchInput === 'function') {
      onSearchInput(enrichEventWithDetails(e, { value: e.target.value }));
    }
    setSearchValue(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    if (typeof onSearch === 'function') {
      if (e.type === 'keyup' && e.code === 'Enter') {
        onSearch(enrichEventWithDetails(e, { value: e.target.value }));
      }
      if (e.type === 'click') {
        onSearch(enrichEventWithDetails(e, { value: searchValue }));
      }
    }
  };
  const handleResetSearch = () => {
    //if (typeof onSearchReset === 'function') {
    //onSearchReset(enrichEventWithDetails(e, { prevValue: searchValue }));
    //}
    setSearchValue('');
  };

  const handleSelectionChange = (e) => {
    if (typeof listProps?.onSelectionChange === 'function') {
      listProps.onSelectionChange(e);
    }
    setSelectedItems(e.detail.selectedItems);
  };

  const handleClose = () => {
    selectDialogRef.current.close();
  };

  const handleClear = (e) => {
    if (typeof onReset === 'function') {
      onReset(enrichEventWithDetails(e, { prevSelectedItems: selectedItems }));
    }
    setSelectedItems([]);
    // listRef.current?.deselectSelectedItems();
  };

  const handleConfirm = (e) => {
    if (typeof onOk === 'function') {
      onOk(enrichEventWithDetails(e, { selectedItems }));
    }
    selectDialogRef.current.close();
  };

  const handleAfterClose = (e) => {
    if (typeof onAfterClose === 'function') {
      onAfterClose(e);
    }
    //if (typeof onSearchReset === 'function') {
    //  onSearchReset(enrichEventWithDetails(e, { prevValue: searchValue }));
    //}
    setSearchValue('');
  };

  return (
    <Dialog
      {...rest}
      data-component-name="P13nDialog"
      ref={componentRef}
      className={clsx(classes.dialog, className)}
      onAfterClose={handleAfterClose}
      onBeforeOpen={handleBeforeOpen}
      onAfterOpen={handleAfterOpen}
    >
      <div className={classes.headerContent} slot="header">
        <Title className={clsx(classes.title)}>{headerText}</Title>
        {showResetButton && (
          <Button onClick={handleClear} design={ButtonDesign.Transparent} className={classes.clearBtn}>
            {i18nBundle.getText(RESET)}
          </Button>
        )}
        <Input
          className={classes.input}
          accessibleName={i18nBundle.getText(SEARCH)}
          value={searchValue}
          placeholder={i18nBundle.getText(SEARCH)}
          onInput={handleSearchInput}
          onKeyUp={handleSearchSubmit}
          icon={
            <>
              {searchValue && (
                <Icon
                  accessibleName={i18nBundle.getText(RESET)}
                  title={i18nBundle.getText(RESET)}
                  name={iconDecline}
                  interactive
                  onClick={handleResetSearch}
                  className={classes.inputIcon}
                />
              )}
              <Icon
                name={iconSearch}
                className={classes.inputIcon}
                onClick={handleSearchSubmit}
                accessibleName={i18nBundle.getText(SEARCH)}
                title={i18nBundle.getText(SEARCH)}
              />
            </>
          }
        />
        <Button design={ButtonDesign.Transparent} icon={iconCollapseGroup} />
        <Button design={ButtonDesign.Transparent} icon={iconNavigationUpArrow} />
        <Button design={ButtonDesign.Transparent} icon={iconNavigationDownArrow} />
        <Button design={ButtonDesign.Transparent} icon={iconExpandGroup} />
      </div>

      <Table {...listProps} mode={TableMode.MultiSelect} onSelectionChange={handleSelectionChange}>
        <TableColumn slot="columns">{i18nBundle.getText(SELECT_ALL)}</TableColumn>
        {items.map((item) => {
          return (
            <TableRow key={'LintError'}>
              <TableCell>{renderItem(item)}</TableCell>
            </TableRow>
          );
        })}
      </Table>
      <div slot="footer" className={classes.footer}>
        <Button onClick={handleConfirm} design={ButtonDesign.Emphasized}>
          {i18nBundle.getText(OK)}
        </Button>
        <Button onClick={handleClose} design={ButtonDesign.Transparent}>
          {i18nBundle.getText(CANCEL)}
        </Button>
      </div>
    </Dialog>
  );
});

P13nDialog.defaultProps = {
  listProps: {}
};

P13nDialog.displayName = 'P13nDialog';

export { P13nDialog };
