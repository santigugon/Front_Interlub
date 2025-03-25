/* eslint-disable perfectionist/sort-imports */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import './style.css';

import dayjs from 'dayjs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DatePicker } from '@heroui/react';
import { useState, useCallback, useEffect, SetStateAction } from 'react';

import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuList from '@mui/material/MenuList';
import Grid from '@mui/material/Unstable_Grid2';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import MenuItem, { menuItemClasses } from '@mui/material/MenuItem';

import { _products } from 'src/_mock';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

import { ProductItem } from 'src/sections/product/product-item';

import { AnalyticsWebsiteVisits } from '../overview/analytics-website-visits';
import { AnalyticsWidgetSummary } from '../overview/analytics-widget-summary';
// eslint-disable-next-line import/no-extraneous-dependencies, import/order
import { pdfjs } from 'react-pdf';

// Explicitly set PDF.js worker source
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const backendServer = 'https://endpoint-interlubhackaton.onrender.com/';

// ----------------------------------------------------------------------

export type UserProps = {
  id: string;
  name: string;
  role: string;
  status: number;
  company: string;
  avatarUrl: string;
  isVerified: boolean;
};

type UserTableRowProps = {
  row: UserProps;
  selected: boolean;
  onSelectRow: () => void;
};

export function UserTableRow({ row, selected, onSelectRow }: UserTableRowProps) {
  const [openPopover, setOpenPopover] = useState<HTMLButtonElement | null>(null);

  const handleOpenPopover = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenPopover(event.currentTarget);
  }, []);

  const handleClosePopover = useCallback(() => {
    setOpenPopover(null);
  }, []);

  const [openModal, setOpenModal] = useState(false);

  const [previousPredictions, setPreviousPredictions] = useState<any[]>([]);
  const [actualData, setActualData] = useState<any[]>([]);
  const [maxPredictions, setMaxPredictions] = useState<any[]>([]);

  const [units, setUnits] = useState<string>('K');

  useEffect(() => {
    // Clear the state initially
    setActualData([]);
    setPreviousPredictions([]);
    setMaxPredictions([]);

    // Arrays to store the results temporarily
    const tempActualData: any[] = [];
    const tempPreviousPredictions: any[] = [];
    const tempMaxPredictions: any[] = [];

    // Function to fetch estimates data
    async function fetchDataEstimates(date: string) {
      const result = await fetch(`${backendServer}/predict?product_id=${row.name}&date=${date}`, {
        method: 'GET',
      });
      const jsonResults = await result.json();
      tempPreviousPredictions.push(Math.abs(Math.ceil(jsonResults[0].yhat)));
      tempMaxPredictions.push(Math.abs(Math.ceil(jsonResults[0].yhat_upper)));
    }

    // Function to fetch actual data
    async function fetchDataActual(date: string) {
      const result = await fetch(`${backendServer}/actual?product_id=${row.name}&date=${date}`, {
        method: 'GET',
      });
      const jsonResults = await result.json();
      tempActualData.push(jsonResults[0].quantity);
      setUnits(jsonResults[0].unit);
    }

    // Dates for the requests
    const dates = [
      '2023-11-08',
      '2023-11-15',
      '2023-11-22',
      '2023-11-29',
      '2023-12-06',
      '2023-12-13',
      '2023-12-20',
      '2023-12-27',
      '2024-01-03',
    ];

    // Fetch data for each date
    const fetchData = async () => {
      const promises = dates.map(async (date, i) => {
        await fetchDataEstimates(date); // Fetch the estimates data
        if (i <= 7) {
          await fetchDataActual(date); // Fetch the actual data for the first 8 dates
        }
      });
      // Wait for all promises to resolve
      await Promise.all(promises);
      // Update the state with the fetched data
      setActualData(tempActualData);
      setPreviousPredictions(tempPreviousPredictions);
      setMaxPredictions(tempMaxPredictions);
    };
    fetchData(); // Call the fetch function to start fetching data
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Dependencies: Only fetch data when row.name changes

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={onSelectRow} />
        </TableCell>

        <TableCell component="th" scope="row">
          <Box
            gap={2}
            display="flex"
            alignItems="center"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <Avatar alt={row.name} src={row.avatarUrl} className="hoverable-image" />
            <p className="hoverable-text">{row.name}</p>
          </Box>
        </TableCell>

        <TableCell>{row.company}</TableCell>

        <TableCell>{row.role}</TableCell>

        <TableCell align="center">
          {row.status > previousPredictions[previousPredictions.length - 1] ? (
            <Iconify width={22} icon="solar:check-circle-bold" sx={{ color: 'success.main' }} />
          ) : (
            '-'
          )}
        </TableCell>

        <TableCell>
          <Label
            color={
              (!previousPredictions.length && 'error') ||
              (row.status < previousPredictions[previousPredictions.length - 1] && 'error') ||
              'success'
            }
          >
            {row.status}
          </Label>
        </TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenPopover}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>
      <Popover
        open={!!openPopover}
        anchorEl={openPopover}
        onClose={handleClosePopover}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuList
          disablePadding
          sx={{
            p: 0.5,
            gap: 0.5,
            width: 140,
            display: 'flex',
            flexDirection: 'column',
            [`& .${menuItemClasses.root}`]: {
              px: 1,
              gap: 2,
              borderRadius: 0.75,
              [`&.${menuItemClasses.selected}`]: { bgcolor: 'action.selected' },
            },
          }}
        >
          <MenuItem onClick={handleClosePopover}>
            <Iconify icon="solar:pen-bold" />
            Edit
          </MenuItem>

          <MenuItem onClick={handleClosePopover} sx={{ color: 'error.main' }}>
            <Iconify icon="solar:trash-bin-trash-bold" />
            Delete
          </MenuItem>
        </MenuList>
      </Popover>
      {openModal && (
        <Modal
          name={row.name}
          units={row.status}
          status="231"
          coverUrl={row.avatarUrl}
          setOpenModal={setOpenModal}
          actualData={actualData}
          previousPredictions={previousPredictions}
          maxPredictions={maxPredictions}
          unitsRequired={previousPredictions[previousPredictions.length - 1]}
          unidad={units}
        />
      )}
    </>
  );
}
// id: string;
// name: string;
// price: number;
// status: string;
// coverUrl: string;
// colors: string[];
// priceSale: number | null;
const Modal = ({
  name,
  units,
  status,
  coverUrl,
  setOpenModal,
  actualData,
  previousPredictions,
  maxPredictions,
  unitsRequired,
  unidad,
}: {
  name: string;
  units: number;
  status: string;
  coverUrl: string;
  actualData: number[];
  previousPredictions: number[];
  maxPredictions: number[];
  unitsRequired: number;
  unidad: string;

  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [predictedUnitsDate, setPredictedUnitsDate] = useState<string>(
    dayjs().format('YYYY-MM-DD')
  );

  const [unidadesEstimadas, setUnidadesEstimadas] = useState<number>(-1);
  const [unidadesMaximasEstimadas, setUnidadesMaximasEstimadas] = useState<number>(-1);
  const [date, setDate] = useState('2024-01-01');

  return (
    <div className="modal">
      <div className="button-row">
        <button onClick={() => setOpenModal(false)} type="button">
          X
        </button>
      </div>
      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={4}>
          <ProductItem
            product={{
              id: _products[0].id,
              name,
              status,
              price: units,
              coverUrl,
              colors: ['red', 'blue', 'yellow'],
              priceSale: unitsRequired,
              unidad,
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsWebsiteVisits
            title="Unidades estimadas vs demanda actual 2023-2024"
            subheader="Semana 45 a la primer semana 2024"
            chart={{
              categories: ['45', '46', '47', '48', '49', '50', '51', '52', '01'],
              series: [
                { name: 'Estimados', data: previousPredictions },
                { name: 'Demanda Actual', data: actualData },
                { name: 'Máxima Demanda Estimada', data: maxPredictions },
              ],
              colors: ['#D74B4B', '#4B77BE', '#F1C232'],
            }}
            unidad={unidad}
          />
        </Grid>
      </Grid>
      <div className="flex-center">
        <h3>Buscar estimaciones para fecha específica</h3>
      </div>
      <div className="date-picker">
        {/* <DatePickerComponent /> */}
        <div className="sub">
          <input
            type="date"
            name=""
            id=""
            value={date}
            defaultValue={dayjs().format('YYYY-MM-DD')}
            onChange={(e) => {
              setPredictedUnitsDate(e.target.value);
              setDate(e.target.value);
            }}
          />
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            color="inherit"
            variant="contained"
            onClick={async () => {
              const result = await fetch(
                `${backendServer}/predict?product_id=${name}&date=${predictedUnitsDate}`,
                {
                  method: 'GET',
                }
              );
              const jsonResults = await result.json();
              setUnidadesMaximasEstimadas(Math.abs(Math.ceil(jsonResults[0].yhat_upper)));
              setUnidadesEstimadas(Math.abs(Math.ceil(jsonResults[0].yhat)));
              // console.log(jsonResults);
            }}
          >
            Buscar estimado en fecha
          </LoadingButton>
        </div>
        {unidadesEstimadas !== -1 && unidadesMaximasEstimadas !== -1 && (
          <AnalyticsWidgetSummary
            title="Unidades estimadas"
            total={unidadesEstimadas}
            fecha={predictedUnitsDate}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-buy.svg" />}
            chart={{
              categories: ['Unidades Estimadas', 'Unidades actuales', 'Unidades Máximas estimadas'],
              series: [unidadesEstimadas, units, unidadesMaximasEstimadas],
            }}
          />
        )}
      </div>
    </div>
  );
};

// const DatePickerComponent = () => {
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
//   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

//   const handleDateClick = (day: number | undefined) => {
//     const date = new Date(currentYear, currentMonth, day);
//     setSelectedDate(date);
//     alert(`You selected: ${date.toLocaleDateString()}`); // Action when a date is selected
//   };

//   const handleMonthChange = (direction: string) => {
//     if (direction === 'next') {
//       setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
//       setCurrentYear((prevYear) => (currentMonth === 11 ? prevYear + 1 : prevYear));
//     } else if (direction === 'prev') {
//       setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
//       setCurrentYear((prevYear) => (currentMonth === 0 ? prevYear - 1 : prevYear));
//     }
//   };

//   // eslint-disable-next-line arrow-body-style
//   const getDaysInMonth = (month: number, year: number) => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   // eslint-disable-next-line arrow-body-style
//   const getFirstDayOfMonth = (month: number, year: number) => {
//     return new Date(year, month, 1).getDay();
//   };

//   const renderCalendar = () => {
//     const daysInMonth = getDaysInMonth(currentMonth, currentYear);
//     const firstDay = getFirstDayOfMonth(currentMonth, currentYear);

//     // eslint-disable-next-line prefer-const
//     let days = [];
//     for (let i = 0; i < firstDay; i++) {
//       days.push(<div key={`empty-${i}`} className="empty-day" />);
//     }

//     // eslint-disable-next-line no-plusplus
//     for (let day = 1; day <= daysInMonth; day++) {
//       days.push(
//         // eslint-disable-next-line jsx-a11y/no-static-element-interactions
//         <div
//           key={day}
//           className={`day ${selectedDate && selectedDate.getDate() === day ? 'selected' : ''}`}
//           onClick={() => handleDateClick(day)}
//         >
//           {day}
//         </div>
//       );
//     }

//     return days;
//   };

//   return (
//     <div className="datepicker-container">
//       <div className="calendar-header">
//         <button className="calendar-nav" onClick={() => handleMonthChange('prev')}>
//           Previous
//         </button>
//         <span className="calendar-title">
//           {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })}{' '}
//           {currentYear}
//         </span>
//         <button className="calendar-nav" onClick={() => handleMonthChange('next')}>
//           Next
//         </button>
//       </div>
//       <div className="calendar-grid">{renderCalendar()}</div>
//       {selectedDate && (
//         <div className="selected-date">
//           <h3>Selected Date: {selectedDate.toLocaleDateString()}</h3>
//         </div>
//       )}
//     </div>
//   );
// };
