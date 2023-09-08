void rotate(int** matrix, int matrixSize, int* matrixColSize){
    for (int i = 0; i < matrixSize; i++)
        for (int j = i + 1; j < matrixSize; j++)
            swap(matrix[i] + j, matrix[j] + i);
    for (int i = 0; i < matrixSize; i++)
        for (int j = 0; j < (matrixSize >> 1); j++)
            swap(matrix[i] + j, matrix[i] + matrixSize - 1 - j);
}

void swap(int *n1, int *n2) {
    *n1 ^= *n2;
    *n2 ^= *n1;
    *n1 ^= *n2;
}
