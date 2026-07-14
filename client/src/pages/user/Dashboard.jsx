import Categories from "../../components/sections/Categories";
import ContinueBuildCard from "../../components/sections/ContinueBuildCard";
import FeaturedBuilds from "../../components/sections/featuredBuilds";
import RecentOrders from "../../components/sections/RecentOrders";

export default function Dashboard(){
    return (
        <>
            <FeaturedBuilds />
            <ContinueBuildCard />
            <Categories />
            <RecentOrders />
        </>
    );
}