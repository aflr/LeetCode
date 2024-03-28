SELECT
    teacher_id,
    count(DISTINCT teacher_id, subject_id) AS cnt
FROM teacher
GROUP BY teacher_id;
