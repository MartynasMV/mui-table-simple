import React from 'react';
import { Table } from '@mui/material';
import { TableContainer } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableCell } from '@mui/material';
import { Paper } from '@mui/material';

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '700px' }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: 'Fifine',
    last_name: 'Matchett',
    email: 'fmatchett0@blogger.com',
    gender: 'Female',
    ip_address: '89.214.73.68',
  },
  {
    id: 2,
    first_name: 'Godfree',
    last_name: 'Perceval',
    email: 'gperceval1@geocities.com',
    gender: 'Male',
    ip_address: '62.183.149.183',
  },
  {
    id: 3,
    first_name: 'Glenn',
    last_name: 'Doorey',
    email: 'gdoorey2@mediafire.com',
    gender: 'Female',
    ip_address: '199.80.18.15',
  },
  {
    id: 4,
    first_name: 'Aleen',
    last_name: 'Perfili',
    email: 'aperfili3@uol.com.br',
    gender: 'Female',
    ip_address: '198.197.253.202',
  },
  {
    id: 5,
    first_name: 'Marsha',
    last_name: 'Chaimson',
    email: 'mchaimson4@whitehouse.gov',
    gender: 'Female',
    ip_address: '249.231.169.16',
  },
  {
    id: 6,
    first_name: 'Jdavie',
    last_name: 'Sibbert',
    email: 'jsibbert5@xinhuanet.com',
    gender: 'Genderfluid',
    ip_address: '212.226.250.52',
  },
  {
    id: 7,
    first_name: 'Adena',
    last_name: 'Usborn',
    email: 'ausborn6@archive.org',
    gender: 'Female',
    ip_address: '158.48.29.44',
  },
  {
    id: 8,
    first_name: 'Inge',
    last_name: 'Lambrecht',
    email: 'ilambrecht7@yahoo.co.jp',
    gender: 'Female',
    ip_address: '22.110.58.19',
  },
  {
    id: 9,
    first_name: 'Cleopatra',
    last_name: 'Chezier',
    email: 'cchezier8@home.pl',
    gender: 'Female',
    ip_address: '152.246.206.21',
  },
  {
    id: 10,
    first_name: 'Clim',
    last_name: 'Reef',
    email: 'creef9@who.int',
    gender: 'Male',
    ip_address: '234.118.115.111',
  },
  {
    id: 11,
    first_name: 'Eunice',
    last_name: 'Loins',
    email: 'eloinsa@goo.gl',
    gender: 'Female',
    ip_address: '138.63.114.178',
  },
  {
    id: 12,
    first_name: 'Lynette',
    last_name: 'Jentzsch',
    email: 'ljentzschb@independent.co.uk',
    gender: 'Female',
    ip_address: '98.87.133.139',
  },
  {
    id: 13,
    first_name: 'Kenton',
    last_name: 'Ferraro',
    email: 'kferraroc@blogs.com',
    gender: 'Male',
    ip_address: '2.219.176.237',
  },
  {
    id: 14,
    first_name: 'Merrilee',
    last_name: 'Ferebee',
    email: 'mferebeed@mtv.com',
    gender: 'Female',
    ip_address: '3.14.87.121',
  },
  {
    id: 15,
    first_name: 'Inness',
    last_name: 'Lodwig',
    email: 'ilodwige@ask.com',
    gender: 'Male',
    ip_address: '69.172.248.45',
  },
  {
    id: 16,
    first_name: 'Caleb',
    last_name: 'Hanington',
    email: 'chaningtonf@sourceforge.net',
    gender: 'Male',
    ip_address: '24.69.8.18',
  },
  {
    id: 17,
    first_name: 'Alexina',
    last_name: 'Seemmonds',
    email: 'aseemmondsg@devhub.com',
    gender: 'Female',
    ip_address: '86.248.116.111',
  },
  {
    id: 18,
    first_name: 'Loren',
    last_name: 'Penhaligon',
    email: 'lpenhaligonh@jigsy.com',
    gender: 'Agender',
    ip_address: '194.77.119.77',
  },
  {
    id: 19,
    first_name: 'Duffy',
    last_name: 'Desbrow',
    email: 'ddesbrowi@netlog.com',
    gender: 'Male',
    ip_address: '178.159.25.104',
  },
  {
    id: 20,
    first_name: 'Shep',
    last_name: 'Poynor',
    email: 'spoynorj@fda.gov',
    gender: 'Male',
    ip_address: '12.172.142.99',
  },
  {
    id: 21,
    first_name: 'Dorothy',
    last_name: 'Benko',
    email: 'dbenkok@ezinearticles.com',
    gender: 'Female',
    ip_address: '107.100.70.84',
  },
  {
    id: 22,
    first_name: 'Lenard',
    last_name: 'Allridge',
    email: 'lallridgel@pen.io',
    gender: 'Genderfluid',
    ip_address: '213.15.167.92',
  },
  {
    id: 23,
    first_name: 'Neil',
    last_name: 'Creevy',
    email: 'ncreevym@hud.gov',
    gender: 'Non-binary',
    ip_address: '58.182.109.118',
  },
  {
    id: 24,
    first_name: 'Kermy',
    last_name: 'Ludwig',
    email: 'kludwign@mapy.cz',
    gender: 'Male',
    ip_address: '207.226.62.98',
  },
  {
    id: 25,
    first_name: 'Sibley',
    last_name: 'Falshaw',
    email: 'sfalshawo@fc2.com',
    gender: 'Female',
    ip_address: '91.15.193.132',
  },
  {
    id: 26,
    first_name: 'Leshia',
    last_name: 'Jerzykiewicz',
    email: 'ljerzykiewiczp@earthlink.net',
    gender: 'Female',
    ip_address: '208.42.41.178',
  },
  {
    id: 27,
    first_name: 'Ileana',
    last_name: 'Dignam',
    email: 'idignamq@youku.com',
    gender: 'Female',
    ip_address: '174.183.161.242',
  },
  {
    id: 28,
    first_name: 'Annis',
    last_name: 'Trimmill',
    email: 'atrimmillr@fda.gov',
    gender: 'Female',
    ip_address: '3.183.112.58',
  },
  {
    id: 29,
    first_name: 'Cam',
    last_name: 'Gonzalvo',
    email: 'cgonzalvos@moonfruit.com',
    gender: 'Female',
    ip_address: '162.43.254.94',
  },
  {
    id: 30,
    first_name: 'Price',
    last_name: 'Wozencraft',
    email: 'pwozencraftt@trellian.com',
    gender: 'Male',
    ip_address: '225.137.104.93',
  },
];
