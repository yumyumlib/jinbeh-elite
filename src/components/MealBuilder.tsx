"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────
   Hibachi Meal Builder — Interactive Calculator
   
   Aligned with actual Jinbeh hibachi menu items.
   Users select their entrée, rice preference, 
   and sauce to see estimated calories + macros.
   ───────────────────────────────────────────── */

interface FoodOption {
    name: string;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    icon: string;
    note?: string;
}

// Actual Jinbeh hibachi menu entrées
// Each dinner includes: soup, salad, fried rice, grilled veggies, dipping sauces
const entrees: FoodOption[] = [
    { name: "Chicken Teriyaki", calories: 280, protein: 38, fat: 10, carbs: 4, icon: "🍗", note: "Most popular choice" },
    { name: "Jumbo Shrimp", calories: 175, protein: 25, fat: 3, carbs: 2, icon: "🦐", note: "Lowest calorie protein" },
    { name: "Sea Scallops", calories: 180, protein: 22, fat: 3, carbs: 4, icon: "🐚" },
    { name: "Salmon", calories: 250, protein: 28, fat: 14, carbs: 0, icon: "🐟", note: "Rich in omega-3s" },
    { name: "Filet Mignon", calories: 300, protein: 30, fat: 20, carbs: 0, icon: "🥩", note: "Premium cut" },
    { name: "NY Strip Steak", calories: 300, protein: 32, fat: 18, carbs: 0, icon: "🥩" },
    { name: "Ribeye Steak", calories: 350, protein: 28, fat: 26, carbs: 0, icon: "🥩", note: "Most marbling & flavor" },
    { name: "Lobster Tail", calories: 200, protein: 28, fat: 4, carbs: 2, icon: "🦞", note: "Maine lobster" },
    { name: "Vegetable & Tofu", calories: 200, protein: 16, fat: 8, carbs: 14, icon: "🥬", note: "Plant-based option" },
];

// Combo dinners (two proteins per plate)
const combos: FoodOption[] = [
    { name: "Steak & Shrimp", calories: 440, protein: 55, fat: 22, carbs: 2, icon: "🥩🦐", note: "Guest favorite combo" },
    { name: "Steak & Chicken", calories: 480, protein: 50, fat: 24, carbs: 4, icon: "🥩🍗" },
    { name: "Steak & Lobster", calories: 460, protein: 52, fat: 22, carbs: 2, icon: "🥩🦞", note: "Surf & turf" },
    { name: "Seafood Trio", calories: 500, protein: 60, fat: 18, carbs: 6, icon: "🦐🐚🦞", note: "Shrimp, scallops, lobster" },
    { name: "Imperial Dinner", calories: 580, protein: 65, fat: 28, carbs: 4, icon: "👑", note: "Filet, lobster tail, shrimp" },
];

const riceOptions: FoodOption[] = [
    { name: "Fried Rice (included)", calories: 350, protein: 8, fat: 12, carbs: 52, icon: "🍳" },
    { name: "Steamed White Rice", calories: 160, protein: 3, fat: 0, carbs: 36, icon: "🍚", note: "Save ~190 calories" },
    { name: "No Rice (extra veggies)", calories: 30, protein: 2, fat: 1, carbs: 5, icon: "🥦", note: "Low-carb swap" },
];

const sauceOptions: FoodOption[] = [
    { name: "Yum Yum Sauce", calories: 80, protein: 0, fat: 8, carbs: 3, icon: "🥣", note: "House-made, creamy" },
    { name: "House Ginger Sauce", calories: 25, protein: 0, fat: 1, carbs: 4, icon: "🫚", note: "Lighter option" },
    { name: "Mustard Sauce", calories: 30, protein: 0, fat: 2, carbs: 3, icon: "🟡" },
    { name: "Teriyaki Glaze", calories: 45, protein: 1, fat: 0, carbs: 10, icon: "🍶" },
    { name: "Soy Sauce", calories: 10, protein: 1, fat: 0, carbs: 1, icon: "🥢", note: "Lowest calorie" },
    { name: "Sauce on the Side", calories: 15, protein: 0, fat: 1, carbs: 1, icon: "✋", note: "Control your portions" },
];

function CalorieMeter({ value, max = 1100 }: { value: number; max?: number }) {
    const pct = Math.min((value / max) * 100, 100);
    const color = value < 500 ? "from-green-400 to-emerald-500" : value < 750 ? "from-soft-gold to-amber-500" : "from-orange-400 to-accent-red";
    const label = value < 500 ? "Light" : value < 750 ? "Moderate" : "Hearty";

    return (
        <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-charcoal/60">
                <span>{label} Meal</span>
                <span>~{value} cal (estimated)</span>
            </div>
            <div className="h-2.5 bg-charcoal/10 rounded-full overflow-hidden">
                <div
                    className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-500 ease-out`}
                    style={{ width: `${pct}%` }}
                />
            </div>
        </div>
    );
}

function SelectionGroup({ label, subtitle, options, selected, onSelect }: {
    label: string;
    subtitle?: string;
    options: FoodOption[];
    selected: number;
    onSelect: (i: number) => void;
}) {
    return (
        <div className="space-y-2.5">
            <div>
                <label className="block text-sm font-heading font-bold text-charcoal uppercase tracking-wider">
                    {label}
                </label>
                {subtitle && <p className="text-xs text-charcoal/50 mt-0.5">{subtitle}</p>}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {options.map((opt, i) => (
                    <button
                        key={opt.name}
                        onClick={() => onSelect(i)}
                        className={`text-left p-3 rounded-xl border-2 transition-all text-sm ${selected === i
                                ? "border-accent-red bg-accent-red/5 shadow-sm"
                                : "border-warm-ivory bg-white hover:border-charcoal/20"
                            }`}
                    >
                        <span className="text-lg block mb-0.5">{opt.icon}</span>
                        <span className="font-medium text-charcoal block leading-tight">{opt.name}</span>
                        <span className="text-charcoal/50 text-xs">~{opt.calories} cal</span>
                        {opt.note && selected === i && (
                            <span className="block text-accent-red/70 text-xs mt-0.5">{opt.note}</span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}

export function MealBuilder() {
    const [menuType, setMenuType] = useState<"singles" | "combos">("singles");
    const [entreeIdx, setEntreeIdx] = useState(0); // chicken default
    const [comboIdx, setComboIdx] = useState(0); // steak & shrimp default
    const [riceIdx, setRiceIdx] = useState(0); // fried rice (included)
    const [sauceIdx, setSauceIdx] = useState(0); // yum yum default

    const activeProtein = menuType === "singles" ? entrees[entreeIdx] : combos[comboIdx];

    // Every hibachi dinner includes ~120 cal from soup + salad
    const soupSaladCal = 120;

    const totals = useMemo(() => {
        const items = [activeProtein, riceOptions[riceIdx], sauceOptions[sauceIdx]];
        const base = items.reduce(
            (acc, item) => ({
                calories: acc.calories + item.calories,
                protein: acc.protein + item.protein,
                fat: acc.fat + item.fat,
                carbs: acc.carbs + item.carbs,
            }),
            { calories: soupSaladCal, protein: 3, fat: 2, carbs: 8 } // soup + salad base
        );
        return base;
    }, [activeProtein, riceIdx, sauceIdx]);

    // Smart tips based on actual Jinbeh menu
    const tips = useMemo(() => {
        const t: string[] = [];
        if (riceIdx === 0) t.push("💡 Ask for steamed rice instead of fried rice — saves about 190 calories");
        if (sauceIdx === 0) t.push("💡 Jinbeh's house-made ginger sauce is a lighter alternative to yum yum sauce (25 cal vs 80 cal)");
        if (menuType === "singles" && entreeIdx === 1) t.push("✅ Jumbo shrimp is Jinbeh's lowest-calorie protein option!");
        if (menuType === "combos" && comboIdx === 4) t.push("👑 The Imperial Dinner is Jinbeh's ultimate hibachi experience — filet mignon, lobster tail, and jumbo shrimp");
        if (riceIdx === 2) t.push("🥦 Great choice — extra grilled veggies add fiber and nutrients without many calories");
        if (totals.calories < 500) t.push("✅ This is a light, diet-friendly hibachi dinner!");
        if (totals.protein >= 50) t.push("💪 High protein meal — great for fitness-minded diners");
        return t.slice(0, 3); // limit to 3 tips
    }, [riceIdx, sauceIdx, menuType, entreeIdx, comboIdx, totals.calories, totals.protein]);

    return (
        <div className="not-prose my-10 bg-white rounded-2xl shadow-lg border border-warm-ivory overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-charcoal to-deep-indigo p-5 text-white">
                <h3 className="font-heading text-xl font-bold flex items-center gap-2">
                    🔥 Build Your Jinbeh Hibachi Plate
                </h3>
                <p className="text-white/70 text-sm mt-1">
                    Select your entrée, rice, and sauce to see estimated nutrition
                </p>
            </div>

            <div className="p-5 md:p-6 space-y-6">
                {/* Singles vs Combos toggle */}
                <div className="flex rounded-xl overflow-hidden border-2 border-warm-ivory">
                    <button
                        onClick={() => setMenuType("singles")}
                        className={`flex-1 py-3 text-sm font-bold transition-all ${menuType === "singles"
                                ? "bg-accent-red text-white"
                                : "bg-white text-charcoal hover:bg-warm-ivory"
                            }`}
                    >
                        Single Entrées
                    </button>
                    <button
                        onClick={() => setMenuType("combos")}
                        className={`flex-1 py-3 text-sm font-bold transition-all ${menuType === "combos"
                                ? "bg-accent-red text-white"
                                : "bg-white text-charcoal hover:bg-warm-ivory"
                            }`}
                    >
                        Combo Dinners
                    </button>
                </div>

                {menuType === "singles" ? (
                    <SelectionGroup
                        label="Choose Your Entrée"
                        subtitle="Every dinner includes soup, salad, fried rice, grilled veggies & dipping sauces"
                        options={entrees}
                        selected={entreeIdx}
                        onSelect={setEntreeIdx}
                    />
                ) : (
                    <SelectionGroup
                        label="Choose Your Combo"
                        subtitle="Two premium proteins per plate — includes soup, salad, fried rice, grilled veggies & sauces"
                        options={combos}
                        selected={comboIdx}
                        onSelect={setComboIdx}
                    />
                )}

                <SelectionGroup label="Rice Preference" options={riceOptions} selected={riceIdx} onSelect={setRiceIdx} />
                <SelectionGroup label="Sauce Choice" options={sauceOptions} selected={sauceIdx} onSelect={setSauceIdx} />

                {/* Results */}
                <div className="border-t-2 border-warm-ivory pt-5 space-y-4">
                    <CalorieMeter value={totals.calories} />

                    <div className="grid grid-cols-4 gap-3 text-center">
                        <div className="bg-warm-ivory/50 rounded-lg p-3">
                            <p className="text-2xl font-bold text-charcoal">~{totals.calories}</p>
                            <p className="text-xs text-charcoal/50 uppercase tracking-wider">Calories</p>
                        </div>
                        <div className="bg-warm-ivory/50 rounded-lg p-3">
                            <p className="text-2xl font-bold text-deep-indigo">~{totals.protein}g</p>
                            <p className="text-xs text-charcoal/50 uppercase tracking-wider">Protein</p>
                        </div>
                        <div className="bg-warm-ivory/50 rounded-lg p-3">
                            <p className="text-2xl font-bold text-charcoal">~{totals.fat}g</p>
                            <p className="text-xs text-charcoal/50 uppercase tracking-wider">Fat</p>
                        </div>
                        <div className="bg-warm-ivory/50 rounded-lg p-3">
                            <p className="text-2xl font-bold text-charcoal">~{totals.carbs}g</p>
                            <p className="text-xs text-charcoal/50 uppercase tracking-wider">Carbs</p>
                        </div>
                    </div>

                    {/* Smart Tips */}
                    {tips.length > 0 && (
                        <div className="bg-soft-gold/10 border border-soft-gold/20 rounded-xl p-4 space-y-1.5">
                            {tips.map((tip, i) => (
                                <p key={i} className="text-sm text-charcoal/70">{tip}</p>
                            ))}
                        </div>
                    )}

                    {/* Disclaimer */}
                    <p className="text-xs text-charcoal/40 text-center leading-relaxed">
                        * All calorie and nutritional values are estimates intended to give you a ballpark feel for your meal.
                        Actual values may vary based on preparation, portion sizes, and specific ingredients.
                        Not intended as dietary or medical advice.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-1">
                        <Link
                            href="/order-online"
                            className="flex-1 text-center bg-accent-red text-white font-semibold py-3 px-5 rounded-lg hover:bg-accent-red/90 transition-colors text-sm"
                        >
                            🛒 Order Online
                        </Link>
                        <Link
                            href="/reservations"
                            className="flex-1 text-center bg-charcoal text-warm-ivory font-semibold py-3 px-5 rounded-lg hover:bg-charcoal/90 transition-colors text-sm"
                        >
                            🪑 Dine In — Reserve a Table
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
