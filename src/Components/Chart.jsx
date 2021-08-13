import React from 'react';
import { useRef } from 'react';
import { Line } from 'react-chartjs-2';

function Chart(props) {
    const ref = useRef();

    return (
        <div>
            <Line
                ref={ref}
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [
                        {
                            label: "# Warna",
                            data: [12, 10, 9, 8, 12, 7],
                            backgroundColor: "#186fdc",
                            fill: false
                        },
                        {
                            label: "# Warna 2",
                            data: [5, 6, 7, 9, 2, 4],
                            backgroundColor: "##6c757d",
                            fill: false
                        },
                    ]
                }}
                height={250}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: false
                    }
                }}
            />
        </div>
    );
}

export default Chart;