'use client';

import useStudents from '@/hooks/useStudents';
import type StudentInterface from '@/types/StudentInterface';
import styles from './Students.module.scss';
import Student from './Student/Student';

const Students = (): React.ReactElement => {
  const {students, deleteStudentMutate } = useStudents();

  const onDeleteHandler = (studetnId: number) =>{
    console.log('>> studetnId', studetnId);
    deleteStudentMutate(studetnId);
  }

  return (
    <div className={styles.Students}>
      {students.map((student: StudentInterface) => (
        <Student
        student={student}
        onDelete={onDeleteHandler}
        />
      ))}
    </div>
  );
};

export default Students;
