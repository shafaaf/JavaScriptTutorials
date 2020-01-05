declare const winningCombos: number[][];
declare let qClassElements: HTMLCollectionOf<Element>;
declare const qNumId: (qEl: string) => number;
declare const emptyQs: (htmlCollection: HTMLCollection) => Element[];
declare const isAllSame: (htmlCollection: HTMLCollection) => boolean;
declare const setTurn: (index: number, letter: string) => void;
declare let opponentChoice: () => number;
declare let opponentTurn: () => void;
declare let clickFn: (event: Event) => void;
declare const enableListeners: () => void;
declare const disableListeners: () => void;
declare const a: number;
