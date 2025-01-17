import { formatMoney } from '_common/base/currency_base';
import { localize }    from '_common/localize';
import { toTitleCase } from '_common/string_util';
import { toMoment }    from 'Utils/Date';

export const formatStatementTransaction = (transaction, currency) => {
    const format_string = 'DD MMM YYYY - HH:mm:ss';
    const transaction_time   = toMoment(transaction.transaction_time).format(format_string);
    const payout     = parseFloat(transaction.payout);
    const amount     = parseFloat(transaction.amount);
    const balance    = parseFloat(transaction.balance_after);
    const should_exclude_currency = true;

    return {
        action     : localize(toTitleCase(transaction.action_type) /* localize-ignore */), // handled in static_strings_app.js: 'Buy', 'Sell', 'Deposit', 'Withdrawal'
        date       : transaction_time,
        refid      : transaction.transaction_id,
        payout     : isNaN(payout) ? '-' : formatMoney(currency, payout, should_exclude_currency),
        amount     : isNaN(amount) ? '-' : formatMoney(currency, amount, should_exclude_currency),
        balance    : isNaN(balance) ? '-' : formatMoney(currency, balance, should_exclude_currency),
        desc       : transaction.longcode.replace(/\n/g, '<br />'),
        id         : transaction.contract_id,
        app_id     : transaction.app_id,
        shortcode  : ['buy', 'sell'].includes(transaction.action_type) ? transaction.shortcode : null,
        action_type: transaction.action_type,
    };
};
