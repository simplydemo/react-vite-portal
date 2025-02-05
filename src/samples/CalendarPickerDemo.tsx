import React, { useState } from 'react';
import { Box, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs, { Dayjs } from 'dayjs';

const CalendarPickerDemo: React.FC = () => {
    // 'single' 모드는 단일 날짜 선택, 'range' 모드는 기간 선택을 의미합니다.
    const [mode, setMode] = useState<'single' | 'range'>('single');

    // 단일 날짜 선택 상태 (초기값: 오늘)
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
    // 기간 선택 상태: 시작일과 종료일 (초기값: 오늘과 내일)
    const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
    const [endDate, setEndDate] = useState<Dayjs | null>(dayjs().add(1, 'day'));

    // 모드 전환 핸들러
    const handleModeChange = (
        event: React.MouseEvent<HTMLElement>,
        newMode: 'single' | 'range' | null
    ) => {
        if (newMode == null) console.log(event)
        if (newMode !== null) {
            setMode(newMode);
        }
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ p: 2 }}>
                <Typography variant="h4" gutterBottom>
                    Calendar Picker Demo
                </Typography>

                {/* 모드 전환 토글 버튼 */}
                <ToggleButtonGroup
                    value={mode}
                    exclusive
                    onChange={handleModeChange}
                    sx={{ mb: 2 }}
                >
                    <ToggleButton value="single">단일 날짜 선택</ToggleButton>
                    <ToggleButton value="range">기간 선택</ToggleButton>
                </ToggleButtonGroup>

                {mode === 'single' ? (
                    // 단일 날짜 선택: StaticDatePicker 사용 (정적 캘린더)
                    <StaticDatePicker
                        displayStaticWrapperAs="desktop"
                        openTo="day"
                        value={selectedDate}
                        onChange={(newValue) => setSelectedDate(newValue)}
                    />
                ) : (
                    // 기간 선택: DesktopDatePicker 두 개를 사용하여 시작일과 종료일 선택
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 300 }}>
                        <DesktopDatePicker
                            label="시작일"
                            format="YYYY-MM-DD"
                            value={startDate}
                            onChange={(newValue) => setStartDate(newValue)}
                        />
                        <DesktopDatePicker
                            label="종료일"
                            format="YYYY-MM-DD"
                            value={endDate}
                            onChange={(newValue) => setEndDate(newValue)}
                        />
                    </Box>
                )}

                {/* 선택한 날짜 또는 기간 표시 */}
                <Box sx={{ mt: 2 }}>
                    {mode === 'single' ? (
                        <Typography>
                            선택한 날짜: {selectedDate ? selectedDate.format('YYYY-MM-DD') : '없음'}
                        </Typography>
                    ) : (
                        <Typography>
                            선택한 기간: {startDate ? startDate.format('YYYY-MM-DD') : '없음'} ~{' '}
                            {endDate ? endDate.format('YYYY-MM-DD') : '없음'}
                        </Typography>
                    )}
                </Box>
            </Box>
        </LocalizationProvider>
    );
};

export default CalendarPickerDemo;
