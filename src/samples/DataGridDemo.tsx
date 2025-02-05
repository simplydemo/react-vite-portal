// DataGridDemo.tsx
import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Container, Box, Typography } from '@mui/material';

// 컬럼 정의 (정렬 가능하도록 설정)
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, sortable: true },
    { field: 'name', headerName: 'Name', width: 200, sortable: true },
    { field: 'age', headerName: 'Age', width: 100, sortable: true },
    { field: 'email', headerName: 'Email', width: 250, sortable: true },
];

// Mockup 데이터 (JSON 형식)
const rows = [
    { id: 1, name: 'Alice Johnson', age: 25, email: 'alice.johnson@example.com' },
    { id: 2, name: 'Bob Smith', age: 30, email: 'bob.smith@example.com' },
    { id: 3, name: 'Charlie Brown', age: 28, email: 'charlie.brown@example.com' },
    { id: 4, name: 'Diana Prince', age: 27, email: 'diana.prince@example.com' },
    { id: 5, name: 'Evan Davis', age: 32, email: 'evan.davis@example.com' },
    { id: 6, name: 'Fiona Clark', age: 29, email: 'fiona.clark@example.com' },
    { id: 7, name: 'George Lee', age: 31, email: 'george.lee@example.com' },
];

const DataGridDemo: React.FC = () => {
    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 5 });

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom align="center">
                사용자 데이터 그리드
            </Typography>
            <Box
                sx={{
                    height: 500, // 충분한 높이 설정
                    width: '100%',
                    boxShadow: 3,
                    borderRadius: 2,
                    p: 2,
                }}
            >
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pagination
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    pageSizeOptions={[5, 10, 20]}
                    disableRowSelectionOnClick
                    sx={{
                        '& .MuiDataGrid-columnHeader': {
                            backgroundColor: '#4caf50',
                            borderBottom: '2px solid #388e3c',
                            color: '#FEEFFE',
                        },
                        '& .MuiDataGrid-columnHeaderTitle': {
                            fontWeight: 'bold',
                            fontSize: '1rem',
                        },
                        // 각 셀의 패딩 조정
                        '& .MuiDataGrid-cell': {
                            padding: '8px',
                        },
                    }}
                />
            </Box>
        </Container>
    );
};

export default DataGridDemo;
