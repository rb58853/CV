export const name = 'Raul Beltran'

const about =
    "I am Raúl, a computer scientist with a solid background in mathematics. My specialty lies in the analysis and design of algorithms, combined with advanced skills in frontend and backend programming, which allows me to work as a full-stack developer. My experience extends to the application of machine learning techniques and artificial intelligence, with my thesis project being in this field.\n\n\
My methodological approach includes the use of agile methodologies such as Scrum and Kanban, which allows me to work efficiently and adaptably. I value the importance of maintaining clean, organized, and well-commented code, following the SOLID principles to ensure the quality, maintainability, and scalability of software.\n\n\
My professional interests lean towards number theory, graph theory, and the development of solutions in the field of machine learning and artificial intelligence. I am open to working on projects that require both frontend and backend development, as well as game development, and I am committed to creating optimal solutions."


export function studentInfo(year = 1) {
    const match = { 1: 'first', 2: 'second', 3: 'third', 4: 'forth', 5: 'fiveth' }

    return `This work was carried out while the author was in their ${match[year]} year as a student of computer science. While studying, knowledge is being acquired, and projects are not implemented in the best possible way. Additionally, in a course, several projects are developed in parallel in a short time. For these reasons, the best programming and architectural practices may not be found in each of the projects.`
}

export default about