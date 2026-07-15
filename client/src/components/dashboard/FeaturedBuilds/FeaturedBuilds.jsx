import Button from "../../common/Button"
import featuredBuilds from "../../../data/featuredBuilds";
import BuildCard from "./BuildCard";
import Card from "../../common/Card";

export default function FeaturedBuilds(){
    return(
        <section>

            {/* Title Row */}
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold tracking-tight text-white">
                    Featured Builds
                </h1>

                <button className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium cursor-pointer">
                    View All →
                </button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
                {featuredBuilds.slice(0,4).map((build)=>(
                    <BuildCard
                        key={build.id}
                        build={build}
                    />
                ))}
            </div>

        </section>
    );
}