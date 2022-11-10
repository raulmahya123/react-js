import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'Jan',
		BARANGMASUK: 3490,
		PAJANGAN: 4300,
		PINJAMAN:10990
	},
	{
		name: 'Feb',
		BARANGMASUK: 3490,
		PAJANGAN: 4300,
		PINJAMAN:10990
	},
	{
		name: 'Mar',
		BARANGMASUK: 3490,
		PAJANGAN: 4300,
		PINJAMAN:10990
	},
	{
		name: 'Apr',
		EBARANGMASUK: 3490,
		PAJANGAN: 4300,
		PINJAMAN:10990
	},
	{
		name: 'May',
		BARANGMASUK: 3490,
		PAJANGAN: 4300,
		PINJAMAN:10990
	},
	{
		name: 'Jun',
		BARANGMASUK: 3490,
		PAJANGAN: 4300,
		PINJAMAN:10990
	},
	{
		name: 'July',
		BARANGMASUK: 3490,
		PAJANGAN: 4300,
		PINJAMAN:10990
	},
	{
		name: 'Aug',
		BARANGMASUK: 3490,
		PAJANGAN: 4300,
		PINJAMAN:10990
	},
	{
		name: 'Sep',
		BARANGMASUK: 3490,
		PAJANGAN: 4300,
		PINJAMAN:10990
	},
	{
		name: 'Oct',
		BARANGMASUK: 3490,
		PAJANGAN: 4300,
		PINJAMAN:10990
	},
	{
		name: 'Nov',
		BARANGMASUK: 3490,
		PAJANGAN: 4300,
		PINJAMAN:10990
	},
	{
		name: 'Dec',
		BARANGMASUK: 3490,
		PAJANGAN: 4300,
		PINJAMAN:10990
	}
]

export default function TransactionChart() {
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="font-medium text-gray-700">Transactions</strong>
			<div className="flex-1 w-full mt-3 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="BARANGMASUK" fill="#0ea5e9" />
						<Bar dataKey="PAJANGAN" fill="#ea580c" />
						<Bar dataKey="PINJAMAN" fill="#ea4503" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
