"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const menuItems = [
  // Food
  {
    id: 1,
    category: "food",
    name: "カレーライス",
    english: "Curry Rice",
    description: "人気No.1のスパイシーカレー",
    price: 1200,
  },
  {
    id: 2,
    category: "food",
    name: "ハンバーガー",
    english: "Hamburger",
    description: "ジューシーなビーフバーガー",
    price: 1100,
  },
  {
    id: 3,
    category: "food",
    name: "パスタ",
    english: "Pasta",
    description: "トマトソースたっぷりのパスタ",
    price: 1300,
  },

  // Dessert
  {
    id: 4,
    category: "dessert",
    name: "ショートケーキ",
    english: "Shortcake",
    description: "ふわふわスポンジの人気デザート",
    price: 700,
  },
  {
    id: 5,
    category: "dessert",
    name: "ワッフル",
    english: "Waffle",
    description: "焼きたてサクサクワッフル",
    price: 800,
  },
  {
    id: 6,
    category: "dessert",
    name: "アイスクリーム",
    english: "Ice Cream",
    description: "冷たくて甘い定番デザート",
    price: 500,
  },

  // Drink
  {
    id: 7,
    category: "drink",
    name: "コーヒー",
    english: "Coffee",
    description: "香り高いホットコーヒー",
    price: 500,
  },
  {
    id: 8,
    category: "drink",
    name: "タピオカ",
    english: "Bubble Tea",
    description: "もちもち食感の人気ドリンク",
    price: 650,
  },
  {
    id: 9,
    category: "drink",
    name: "コーラ",
    english: "Cola",
    description: "爽やかな炭酸ドリンク",
    price: 400,
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] =
    useState("food");

  const [counts, setCounts] = useState<
    Record<number, number>
  >({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  });

  const filteredItems = useMemo(() => {
    return menuItems.filter(
      (item) =>
        item.category === selectedCategory
    );
  }, [selectedCategory]);

  const increaseCount = (id: number) => {
    setCounts((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const decreaseCount = (id: number) => {
    setCounts((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  const totalItems = Object.values(counts).reduce(
    (sum, count) => sum + count,
    0
  );

  const totalPrice = menuItems.reduce((sum, item) => {
    return sum + item.price * counts[item.id];
  }, 0);

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-100 pb-36">

      {/* Header */}
      <div className="sticky top-0 z-50 bg-orange-50 border-b shadow-sm">

        <div className="max-w-sm mx-auto p-4 space-y-4">

          {/* Title */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-orange-600">
              OSAKI亭
            </h1>

            <p className="text-sm text-gray-600">
              Japanese Restaurant & Cafe
            </p>
          </div>

          {/* Tabs */}
          <div className="grid grid-cols-3 gap-2">

            <Button
              variant={
                selectedCategory === "food"
                  ? "default"
                  : "outline"
              }
              onClick={() =>
                setSelectedCategory("food")
              }
              className="h-14 flex flex-col"
            >
              <span>食べ物</span>
              <span className="text-xs">
                Food
              </span>
            </Button>

            <Button
              variant={
                selectedCategory === "dessert"
                  ? "default"
                  : "outline"
              }
              onClick={() =>
                setSelectedCategory("dessert")
              }
              className="h-14 flex flex-col"
            >
              <span>デザート</span>
              <span className="text-xs">
                Dessert
              </span>
            </Button>

            <Button
              variant={
                selectedCategory === "drink"
                  ? "default"
                  : "outline"
              }
              onClick={() =>
                setSelectedCategory("drink")
              }
              className="h-14 flex flex-col"
            >
              <span>飲み物</span>
              <span className="text-xs">
                Drink
              </span>
            </Button>

          </div>

        </div>

      </div>

      {/* Menu List */}
      <div className="max-w-sm mx-auto p-4 space-y-5">

        {filteredItems.map((item) => (
          <Card
            key={item.id}
            className="rounded-3xl shadow-lg"
          >
            <CardHeader>
              <CardTitle>
                {item.name} / {item.english}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">

              <p className="text-sm text-gray-600">
                {item.description}
              </p>

              <p className="font-bold text-xl">
                ¥{item.price}
              </p>

              {/* Counter */}
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      decreaseCount(item.id)
                    }
                  >
                    −
                  </Button>

                  <span className="w-6 text-center text-lg font-bold">
                    {counts[item.id]}
                  </span>

                  <Button
                    size="sm"
                    onClick={() =>
                      increaseCount(item.id)
                    }
                  >
                    ＋
                  </Button>

                </div>

                <Button>
                  注文追加
                </Button>

              </div>

            </CardContent>
          </Card>
        ))}

      </div>

      {/* Bottom Order Area */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">

        <div className="max-w-sm mx-auto p-4 space-y-3">

          <div className="flex justify-between text-sm">
            <span>注文数 / Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="flex justify-between text-lg font-bold">
            <span>合計 / Total</span>
            <span>¥{totalPrice}</span>
          </div>

          <Button className="w-full h-14 rounded-2xl text-lg">
            注文リストへ進む
          </Button>

        </div>

      </div>

    </main>
  );
}