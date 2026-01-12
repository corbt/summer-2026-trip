'use client';

interface CalendarEvent {
  date: string;
  endDate?: string;
  title: string;
  color: string;
  emoji?: string;
}

// Dates aligned with "The Journey" timeline
// Travel days show the destination (where you sleep that night)
const events: CalendarEvent[] = [
  { date: '2026-06-19', title: 'Last day of school', color: 'bg-yellow-400', emoji: '🎒' },
  { date: '2026-06-21', title: 'Fly to Dublin', color: 'bg-gray-400', emoji: '✈️' },
  { date: '2026-06-22', title: 'Dublin', color: 'bg-green-500', emoji: '🍀' },
  { date: '2026-06-23', endDate: '2026-07-05', title: 'Barcelona', color: 'bg-amber-500', emoji: '🌅' },
  { date: '2026-07-06', endDate: '2026-07-12', title: 'Dingle', color: 'bg-blue-500', emoji: '🐬' },
  { date: '2026-07-13', endDate: '2026-07-20', title: 'Connemara', color: 'bg-purple-500', emoji: '🏔️' },
  { date: '2026-07-21', endDate: '2026-07-22', title: 'Fly home', color: 'bg-gray-400', emoji: '✈️' },
  { date: '2026-07-23', endDate: '2026-07-26', title: 'Family Reunion', color: 'bg-red-500', emoji: '👨‍👩‍👧‍👦' },
];

const months = [
  { name: 'June 2026', year: 2026, month: 5, startDay: 1, days: 30 },
  { name: 'July 2026', year: 2026, month: 6, startDay: 3, days: 31 },
];

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Parse date string as local date to avoid timezone issues
function parseLocalDate(dateStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function getEventForDate(year: number, month: number, day: number): CalendarEvent | null {
  const date = new Date(year, month, day);

  for (const event of events) {
    const startDate = parseLocalDate(event.date);
    const endDate = event.endDate ? parseLocalDate(event.endDate) : startDate;

    if (date >= startDate && date <= endDate) {
      return event;
    }
  }
  return null;
}

function isEventStart(year: number, month: number, day: number): boolean {
  const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  return events.some(e => e.date === dateStr);
}

export default function TripCalendar() {
  return (
    <div className="flex gap-4">
      {/* Calendars */}
      <div className="space-y-4">
        {months.map((monthData) => (
          <div key={monthData.name} className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3 text-center">{monthData.name}</h3>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map((day) => (
                <div key={day} className="text-xs text-gray-500 text-center font-medium">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
              {/* Empty cells for days before month starts */}
              {Array.from({ length: monthData.startDay }).map((_, i) => (
                <div key={`empty-${i}`} className="h-8" />
              ))}

              {/* Days of the month */}
              {Array.from({ length: monthData.days }).map((_, i) => {
                const day = i + 1;
                const event = getEventForDate(monthData.year, monthData.month, day);
                const isStart = isEventStart(monthData.year, monthData.month, day);

                return (
                  <div
                    key={day}
                    className={`h-8 flex items-center justify-center text-xs rounded relative ${
                      event ? `${event.color} text-white font-medium` : 'text-gray-600'
                    }`}
                    title={event ? `${event.emoji} ${event.title}` : undefined}
                  >
                    {day}
                    {isStart && event?.emoji && (
                      <span className="absolute -top-1 -right-1 text-xs">{event.emoji}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="bg-white rounded-xl p-4 shadow-sm h-fit">
        <h4 className="font-medium text-gray-900 mb-3 text-sm">Key Dates</h4>
        <div className="space-y-2">
          {events.map((event) => (
            <div key={event.title} className="flex items-center gap-2 text-xs whitespace-nowrap">
              <div className={`w-3 h-3 rounded flex-shrink-0 ${event.color}`} />
              <span className="text-gray-600">
                {event.emoji} {event.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
