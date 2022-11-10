import React from 'react'
import DashboardStatsGrid from '../component/DashboardStatsGrid'
import TransactionChart from '../component/TransactionChart'
import RecentOrders from '../component/RecentOrders'
import BuyerProfilePieChart from '../component/BuyerProfilePieChart'
import PopularProducts from '../component/PopularProducts'


export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row w-full gap-4">
				<TransactionChart />
				<BuyerProfilePieChart />
			</div>
			<div className="flex flex-row w-full gap-4">
				<RecentOrders />
				<PopularProducts />
			</div>
		</div>
	)
}
