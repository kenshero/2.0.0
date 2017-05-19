import SectionTitle from './SectionTitle'

const beginnerData = [{
  time: '00.00 - 00.00',
  topic: 'Let `s start with React in the right way',
  speaker: 'Somkiat Puisungnoen - somkiat.cc'
}, {
  time: '00.00 - 00.00',
  topic: 'Switching from Mobile (Native) to React Web Developer',
  speaker: 'Chinnawat Panmongkol - Wongnai'
}, {
  time: '00.00 - 00.00',
  topic: 'Live coding / mob programming session',
  speaker: 'Thai Pangsakulyanont - Taskworld'
}, {
  time: '00.00 - 00.00',
  topic: 'Angular to React without breaking things',
  speaker: 'Jirat Kijlerdpornpailoj - Sprint3r / Gucode'
}, {
  time: '00.00 - 00.00',
  topic: 'Workshop with Next.js',
  speaker: 'Nati Namvong - CTO at Sellsuki'
}]

const intermediateData = [{
  time: '00.00 - 00.00',
  topic: '[ENG] Scalable React App Architecture',
  speaker: 'Zack Siri - Founder at Artellectual'
}, {
  time: '00.00 - 00.00',
  topic: 'Behavior Driven Development in React Native',
  speaker: 'Tim Tana - CTO at Planforfit'
}, {
  time: '00.00 - 00.00',
  topic: 'Styled Components: Change your css styling mindset! ',
  speaker: 'Yanin Tuamsuk - Front-end Engineer at Jitta'
}, {
  time: '00.00 - 00.00',
  topic: 'Lessons Learned from using Next.js in Production',
  speaker: 'Panjamapong (PanJ) Sermsawatsri - CTO at TakeMeTour'
}, {
  time: '00.00 - 00.00',
  topic: 'Testable react: patterns and comparison',
  speaker: 'Chakrit Likitkhajorn - Lead developer at Taskworld'
}]

export default function ScheduleSection () {
  return (
    <div className='schedule-wrapper'>
      <SectionTitle>Schedule</SectionTitle>
      <ScheduleTable track='Beginner Track' scheduleData={beginnerData} />
      <br />
      <ScheduleTable track='Intermediate Track' scheduleData={intermediateData} />
      <style jsx>{`
        .schedule-wrapper {
          text-align: center;
        }
      `}</style>
    </div>
  )
}

const ScheduleTable = ({ track, scheduleData }) => {
  return (
    <div className='schedule-table-wrapper'>
      <table className='schedule-table'>
        <thead>
          <tr>
            <th colSpan='2'>{track}</th>
          </tr>
        </thead>
        <tbody>
          {
            scheduleData.map((data, index) => (
              <tr>
                <td>{data.time}</td>
                <td><p>{data.topic}</p>- {data.speaker}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <style jsx>{`
        @media (max-width: 500px) {
          .schedule-table {
            text-align: center;
            width: 300px;
            margin: 0 auto;
            border: 1px solid #fff;
          }
        }
        @media (min-width: 500px) {
          .schedule-table {
            text-align: center;
            width: 500px;
            margin: 0 auto;
            border: 1px solid #fff;
          }
        }
        .schedule-table th{
          border-bottom: 1px solid #fff;
          text-align: center;
        }
        .schedule-table td{
          border-bottom: 1px solid #fff;
        }
        .schedule-table td:first-child{
          border-right: 1px solid #fff;
          text-align: center;
        }
        .schedule-table tr:last-child td{
          border-bottom: none;
        }
      `}</style>
    </div>
  )
}
