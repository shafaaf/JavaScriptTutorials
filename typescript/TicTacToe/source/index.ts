const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

let qClassElements = document.getElementsByClassName('q');

const qNumId = (qEl: string): number => {
    return parseInt(qEl.replace('q', ''));
};

const emptyQs = (): Element[] => {
    let elementsArray: Array<Element> = [];
    for (let i = 0; i < qClassElements.length; i++) {
        if (qClassElements[i].innerHTML === '') {
            elementsArray.push(qClassElements[i]);
        }
    }
    return elementsArray;
};

const isAllSame = (elementsArray: Element[]): boolean => {
    if (elementsArray.length == 0) {
        alert("isAllSame: Something wrong");
    }
    if (elementsArray[0].innerHTML === '') {
        return false;
    }
    for (let i = 0; i < elementsArray.length; i++) {
        if (elementsArray[i].innerHTML !== elementsArray[0].innerHTML) {
            return false;
        }
    }
    return true;
};

const endGame = (sequence: Element[]) => {
    console.log("endGame: ", sequence);
    for (let i = 0; i < sequence.length; i++) {
        sequence[i].classList.add('winner');
    }
};

const checkForVictory = () => {
    for (let i = 0; i < winningCombos.length; i++) {
        let sequence: Element[] = [
            qClassElements[winningCombos[i][0]],
            qClassElements[winningCombos[i][1]],
            qClassElements[winningCombos[i][2]],
        ];
        if (isAllSame(sequence)) {
            endGame(sequence);
            return true;
        }
    }
    return false;
};

const setTurn = (index: number, letter: string) => {
    qClassElements[index].innerHTML = letter;
};

let opponentChoice = (): number => {
    let element = emptyQs()[Math.floor(Math.random() * emptyQs().length)];
    return qNumId(element.id);
};

let opponentTurn = () => {
    disableListeners();
    setTimeout(() => {
        setTurn(opponentChoice(), 'O');
        if (checkForVictory()) {
        } else {
            enableListeners();
        }
    }, 500);
};

let clickFn = (event: Event) => {
    console.log("clickFn: ", event.target);

    let element = event.target as HTMLElement;
    let id = element.id;
    if ((element.innerText == 'X') || (element.innerText == 'O')) {
        return;
    }
    setTurn(qNumId(id), 'X');
    if(!checkForVictory()) {
        opponentTurn();
    } else {
        disableListeners();
    }
};

const enableListeners = () => {
    for (let i = 0; i < qClassElements.length; i++) {
        qClassElements[i].addEventListener("click", clickFn);
    }
};

const disableListeners = () => {
    for (let i = 0; i < qClassElements.length; i++) {
        qClassElements[i].removeEventListener("click", clickFn);
    }
};

enableListeners();

const a = 3 + 3;