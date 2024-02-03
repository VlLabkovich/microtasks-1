export const students = [
    {id: 1, name: 'Vladislav', age: 13},
    {id: 2, name: 'Evgen', age: 14},
    {id: 3, name: 'Yri', age: 12},
    {id: 4, name: 'Anton', age: 10},
    {id: 5, name: 'Sasha', age: 16},
    {id: 6, name: 'Serj', age: 11}
]
type NewComponentType = {
    // students1: StudentType[] or
    students1: Array<StudentType>
}

type StudentType = {
    id: number
    name: string
    age: number
}

export const Practice = (props: NewComponentType) => {
    return (
        // <div>
        //     {props.students.map((item) =>
        //         <ul key={item.id}>
        //             <li>{item.name}</li>
        //             <li>{item.age}</li>
        //         </ul>
        //     )}
        // </div>

        <ul>
            {props.students1.map((item) => {
                debugger
                return (
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <span> age: {item.age}</span>
                    </li>
                )
            })}

        </ul>

    )
}