import orders from "../../data/orders";

export default function OrderCard({order}){
    const { id, build, date, status } = order;
    const statusStyles = {
        Delivered: "bg-green-500/20 text-green-400",
        Processing: "bg-yellow-500/20 text-yellow-400",
        Cancelled: "bg-red-500/20 text-red-400",
    };
    return(
        <section className="rounded-xl border border-zinc-800 bg-[#161B22] p-4 mt-3 hover:border-blue-500/30 hover:-translate-y-1 transition-all">
            <h3 className="mt-2 text-xl font-semibold text-white">
                {build}
            </h3>

            <p className="mt-3 text-base text-white">
                {id} • {date}
            </p>

            <p className={`mt-3 inline-block rounded-full px-3 py-1 text-sm font-medium ${statusStyles[status]}`} >
                {status}
            </p>

            <div className="mt-4">
            <button className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                Track Order →
            </button>
            </div>
        </section>
    );
}