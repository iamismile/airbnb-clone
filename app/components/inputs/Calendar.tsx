'use client';

import { DateRange, Range, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface CalendarProps {
  value: Range;
  disabledDates?: Date[];
  onChange: (value: RangeKeyDict) => void;
}

const Calendar: React.FC<CalendarProps> = ({ value, disabledDates, onChange }) => {
  return (
    <DateRange
      direction="vertical"
      rangeColors={['#262626']}
      ranges={[value]}
      date={new Date()}
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
      onChange={onChange}
    />
  );
};

export default Calendar;
