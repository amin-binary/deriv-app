import React        from 'react';
import { localize } from '_common/localize';
import Money        from '../../../../App/Components/Elements/money.jsx';
import Localize     from '../../../../App/Components/Elements/localize.jsx';

export const contractSold = (currency, sold_for) => ({
    header : localize('Contract sold'),
    message: (
        <Localize
            str='Contract was sold for [_1].'
            replacers={{ '1': <Money key={sold_for} amount={sold_for} currency={currency} /> }}
        />
    ),
    type                 : 'contract_sold',
    size                 : 'small',
    should_hide_close_btn: true,
    is_auto_close        : true,
});
