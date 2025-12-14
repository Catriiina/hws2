import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#00CC22',
                width: 400 ,

                '& .MuiSlider-thumb': {
                    width: 24,
                    height: 24,
                    backgroundColor: '#fff',
                    border: '2px solid #00CC22',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: '#00CC22',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    },
                },
                '& .MuiSlider-track': {
                    border: 'none',
                },
                '& .MuiSlider-rail': {
                    opacity: 0.5,
                    backgroundColor: '#bfbfbf',
                },
            }}
            {...props}
        />
    )
}

export default SuperRange
