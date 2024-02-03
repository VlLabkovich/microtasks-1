export const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

type TopCarsType = {
    topcars1: Array<CarsType>
}

type CarsType = {
    manufacturer: string
    model: string
}

export const TopCars = (props: TopCarsType) => {
    return (
        <table>
            {props.topcars1.map((item, index) =>
                <tr key={index}>
                    <th>{item.manufacturer}</th>
                    <td>{item.model}</td>
                </tr>
            )}
        </table>
    )
}