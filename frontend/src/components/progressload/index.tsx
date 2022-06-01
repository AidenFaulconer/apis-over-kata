import React from 'react'

import ProgressLabel from 'react-progress-label'
import { useTheme } from '../../store/store'
import { Theme } from '../../types/theme';
import { useTrackTime } from '../../util/index';

export default function LoadingProgress({ speed = 1 }: { [key: string]: number; }): JSX.Element {
    //input a progress value that is a continuous sin from 0 100
    const progress = useTrackTime(0, 10, (curTime: number) => {
        const result = Math.abs(Math.sin(curTime / speed)) * 100;
        return result;
    });

    const theme: Theme = useTheme();
    return (
        <ProgressLabel
            progress={progress}
            fillColor="rgb(248,247,243)"
            trackColor="#fff"
            progressColor={theme.core.colors.success}
            progressWidth={10}
            trackWidth={16}
            trackBorderWidth={1}
            trackBorderColor="rgb(232,223,209)"
            cornersWidth={5}
            size={130} />
    );
}