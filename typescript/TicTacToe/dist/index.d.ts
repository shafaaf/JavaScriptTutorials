declare const winningCombos: number[][];
declare let qClassElements: HTMLCollectionOf<Element>;
declare const qNumId: (qEl: string) => number;
declare const emptyQs: () => Element[];
declare const isAllSame: (elementsArray: Element[]) => boolean;
declare const endGame: (sequence: Element[]) => void;
declare const checkForVictory: () => boolean;
declare const setTurn: (index: number, letter: string) => void;
declare let opponentChoiceRandom: () => number;
declare let opponentBestMove: () => void;
declare let convertElementsToBoard: () => String[][];
declare let opponentTurn: () => void;
declare let clickFn: (event: Event) => void;
declare const enableListeners: () => void;
declare const disableListeners: () => void;