export const validationKey = (event, setAnswer1, setAnswer2, setAnswer3) => {
    let e;
    event.key ? (e = event.key) : (e = event.toString());

    switch (e) {
        case "1":
            setAnswer1(1);
            break;
        case "3":
            // setFunction(3);
            setAnswer1(3);
            break;
        case "4":
            setAnswer2(4);
            break;
        case "6":
            setAnswer2(6);
            break;
        case "7":
            setAnswer3(7);
            break;
        case "9":
            setAnswer3(9);
            break;
        default:
            break;
    }
};