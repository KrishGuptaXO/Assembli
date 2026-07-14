import orders from "../../data/orders";
import OrderCard from "../ui/OrderCard";
export default function RecentOrders () {
    return (
        <div>
            <h2 className="text-xl font-semibold text-white">
                Recent Orders
            </h2>

            {orders.map((order)=>(
                <OrderCard
                    key={order.id}
                    order = {order}
                    />
                ))}
        </div>
    );

}