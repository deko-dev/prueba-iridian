export interface EventType {
    id: string;
    name: string;
    markets: MarketType[];
};

/** Market Entity */
export interface MarketType {
    id: string;
    name: string;
    selections: SelectionType[];
}

/** Selection Entity */
export interface SelectionType {
    id: string;
    name: string;
    price: number;
}

/** Betslip item */
export interface BetslipItem {
    id: string;
    name: string;
    price: number;
}