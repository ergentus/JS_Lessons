export enum ACTIONS_TYPE {
	CHANGE_CURRENCY_FIELD_TYPE = 'CHANGE_CURRENCY_FIELD_TYPE',
	CHANGE_CHANGE_ACTION = 'CHANGE_CHANGE_ACTION',
	CHANGE_CURRENT_CURRENCY = 'CHANGE_CURRENT_CURRENCY',
}

export type ChangeCurrencyFieldType = ReturnType<typeof ChangeCurrencyFieldAC>
export type ChangeAction = ReturnType<typeof ChangeActionAC>
export type ChangeCurrentCurrencyType = ReturnType<typeof ChangeCurrentCurrencyAC>
export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;

export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string) => {
	return {type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE, amountOfBYN: amountOfBYN, amountOfCurrency} as const
}

export const ChangeActionAC = (isBuying: boolean) => {
	return {type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION, isBuying} as const
}

export const ChangeCurrentCurrencyAC = (currentCurrency: string) => {
	return {type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY, currentCurrency} as const
}
