import Card from "../../common/Card"
import Button from "../../common/Button"
import Input from "../../common/Input"
import { useState } from "react";

export default function ImportBuild() {
    const [importMode, setImportMode] = useState("url");
    const [inputValue, setInputValue] = useState("");
    const OpenLinkinNewTab = (url) => {
        window.open(url, '_blank', 'noopener, noreferrer');
    };
    return (
        
        <section className="mt-8">

            <Card>
            {/* Title */}
                <div className="flex items-center justify-between">
                    <div>

                        <h2 className="text-3xl font-bold text-white group">
                            Import your PC Build
                        </h2>

                        <p className="mt-2 text-sm text-zinc-400">
                            Check component availability, pricing and receive a quotation.
                        </p>

                        <button className="mt-3 text-cyan-400 text-sm hover:text-cyan-300 cursor-pointer" onClick={() => OpenLinkinNewTab('https://pcpartpicker.com/list')}>
                            Don't have a build? Create one on PCPartPicker →
                        </button>
                    </div>

                </div>

            {/* Import Controls */}
            <div className="mt-8 flex items-center justify-between">
                <div className="flex gap-3">
                    
                    <button 
                    onClick={() => setImportMode("url")}
                    className= {`rounded-full px-5 py-2 transition-all duration-300 cursor-pointer ${importMode === "url" ? "bg-cyan-500 text-black font-semibold" : "border border-zinc-700 text-zinc-400 hover:border-cyan-500"} `} >
                        URL
                    </button>

                    <button 
                    onClick={() => setImportMode("text")}
                    className={` rounded-full px-5 py-2 transition-all duration-300 cursor-pointer ${importMode === "text" ? "bg-cyan-500 text-black font-semibold" : "border border-zinc-700 text-zinc-400 hover:border-cyan-500"} `} >
                        Text
                    </button>

                </div>

                <Button disabled={!inputValue.trim()} onClick={() => console.log("Checking availability...")}> Check Availability →</Button>

            </div>

            {/* Input */}
            <div className="mt-6">

                <Input 
                placeholder={importMode === "url" ? "Paste your PCPartPicker URL..." : "Paste your component list..."} 
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
                />
            
            </div>
            
            </Card>

        </section>
    );
}