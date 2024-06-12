export const headerLinks = [
    {
        label: 'Home',
        route: '/',
    },
    {
        label: 'Departments',
        route: '/departments',
    },
    {
        label: 'Profile',
        route: '/profile',
    },

]

export const departmentsDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(), 
    endDateTime: new Date(),
    designationId: '',
    departmentId: '',
}