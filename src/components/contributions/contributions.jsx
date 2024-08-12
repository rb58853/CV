import { useEffect, useState } from "react";
import { retrieveContributionData } from "../../utils/contributions";
import './styles/desktop.css'
import './styles/mobile.css'

function ContributionsBox() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await retrieveContributionData('rb58853');
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data && <YearView data={data} />}
        </div>
    );
}

function YearView({ data }) {
    const [currentMonth, setCurrentMonth] = useState('none')
    try {
        const weeks = data['data']['user']['contributionsCollection']['contributionCalendar']['weeks']

        const weekViews = weeks.map(week => {
            return <WeekView week={week} currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
        })

        return <div className="yearView">
            <div className="contributionsBox">
                {weekViews}
            </div>
        </div>
    }
    catch {
        return
    }
}



function WeekView({ week, currentMonth, setCurrentMonth }) {
    const daysColumn = week['contributionDays'].map(day => {
        return <DayView day={day} />
    })
    let month = 'j'

    useEffect(() => {
        if (currentMonth != month)
            setCurrentMonth(month)
        if (currentMonth == month)
            month = null

    }, [currentMonth]);

    return <div className="weekView">
        {/* {month != null && <div class="month">{month}</div>} */}
        {daysColumn}
    </div>
}

function DayView({ day }) {
    const opacity = day['contributionCount'] / 12

    return <div className="backgroundSquare">
        <div className="simpleSquare" style={{ opacity: opacity }}>
            <div className="infoDay">
                {/* {day['contributionCount']} */}
            </div>
        </div>
    </div>
}

export default ContributionsBox