import { Student } from "../Models/UserSchema"

const data = [{
    'name': 'akhil',
    'age': 15,
    'grade': 'A',
    'email': 'akhil@example.com'
}]

export const Seed = () => {
    // const value = new Student(data);
    const result = await Student.insertOne(data)
}