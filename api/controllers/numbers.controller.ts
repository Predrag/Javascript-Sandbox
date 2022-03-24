import {NextFunction, Request, Response} from "express";

export function getNumbers(req: Request, res:Response, next: NextFunction) {
    let numbers
    try {
        numbers = res.status(200).json([1, 2, 3]);
    } catch (err) {
        next(err)
    }
    return numbers
}

export function getFloatsDoubles(req: Request, res: Response, next: NextFunction) {
    let numbers
    try {
        numbers = res.status(200).json({"auto": {
                "cenaZaAuto": "250000.00",
                "cenaZaLakovanie": 10500.55,
                "nazovProduktu": "Ferrari"
            }})
    } catch (err) {
        next(err)
    }
    return numbers
}