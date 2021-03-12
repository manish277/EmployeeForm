const KEYS = {
    employees: 'employees',
    employeeId: 'employeeId'
}


export const getEducationOptions = () => ([
    { id: '1', title: 'Graduation' },
    { id: '2', title: 'Masters' },
    { id: '3', title: 'Doctrates' },
    { id: '4', title: 'Others' },
])
export const getContactOptions = () => ([
    { id: 1, title: 'Mobile' },
    { id: 2, title: 'Email' },
])
export function insertEmployee(data) {
    let employees = getAllEmployees();
    data['id'] = generateEmployeeId()
    employees.push(data)
    localStorage.setItem(KEYS.employees, JSON.stringify(employees))
}

export function generateEmployeeId() {
    if (localStorage.getItem(KEYS.employeeId) == null)
        localStorage.setItem(KEYS.employeeId, '0')
    var id = parseInt(localStorage.getItem(KEYS.employeeId))
    localStorage.setItem(KEYS.employeeId, (++id).toString())
    return id;
}

export function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    let employees = JSON.parse(localStorage.getItem(KEYS.employees));
    let educations = getEducationOptions();
    console.log('educations',educations)
    return employees.map(x => ({
        ...x,
        education: educations[x.id - 1].title,
    }))
}