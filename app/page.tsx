import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const foodMenu = [
  {
    name: "カレーライス",
    english: "Curry Rice",
    description: "人気No.1のスパイシーカレー",
    price: "¥1200",
  },
  {
    name: "ハンバーガー",
    english: "Hamburger",
    description: "ジューシーなビーフバーガー",
    price: "¥1100",
  },
  {
    name: "パスタ",
    english: "Pasta",
    description: "トマトソースたっぷりのパスタ",
    price: "¥1300",
  },
];

const dessertMenu = [
  {
    name: "ショートケーキ",
    english: "Shortcake",
    description: "ふわふわスポンジの定番ケーキ",
    price: "¥700",
  },
  {
    name: "アイスクリーム",
    english: "Ice Cream",
    description: "冷たくて甘い人気デザート",
    price: "¥500",
  },
  {
    name: "ワッフル",
    english: "Waffle",
    description: "焼きたてサクサクワッフル",
    price: "¥800",
  },
];

const drinkMenu = [
  {
    name: "コーヒー",
    english: "Coffee",
    description: "香り高いホットコーヒー",
    price: "¥500",
  },
  {
    name: "タピオカ",
    english: "Bubble Tea",
    description: "もちもち食感の人気ドリンク",
    price: "¥650",
  },
  {
    name: "コーラ",
    english: "Cola",
    description: "爽やかな炭酸ドリンク",
    price: "¥400",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-100 flex justify-center p-4">
      
      <div className="w-full max-w-sm space-y-6">

        {/* Header */}
        <div className="text-center pt-6 space-y-2">
          <h1 className="text-4xl font-bold text-orange-600">
            OSAKI亭
          </h1>

          <p className="text-sm text-gray-600">
            Japanese Restaurant & Cafe
          </p>
        </div>

        {/* Category Buttons */}
        <div className="grid grid-cols-3 gap-2">
          <Button className="h-16 flex flex-col">
            <span>食べ物</span>
            <span className="text-xs">Food</span>
          </Button>

          <Button
            variant="secondary"
            className="h-16 flex flex-col"
          >
            <span>デザート</span>
            <span className="text-xs">Dessert</span>
          </Button>

          <Button
            variant="outline"
            className="h-16 flex flex-col"
          >
            <span>飲み物</span>
            <span className="text-xs">Drink</span>
          </Button>
        </div>

        {/* Food Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-orange-600">
            🍛 Food
          </h2>

          {foodMenu.map((item) => (
            <Card
              key={item.name}
              className="rounded-3xl shadow-lg"
            >
              <CardHeader>
                <CardTitle>
                  {item.name} / {item.english}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>

                <p className="font-bold text-lg">
                  {item.price}
                </p>

                <div className="flex gap-2">
                  <Button className="flex-1">
                    注文追加 Add
                  </Button>

                  <Button
                    variant="destructive"
                    className="flex-1"
                  >
                    削除 Remove
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dessert Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-pink-500">
            🍰 Dessert
          </h2>

          {dessertMenu.map((item) => (
            <Card
              key={item.name}
              className="rounded-3xl shadow-lg"
            >
              <CardHeader>
                <CardTitle>
                  {item.name} / {item.english}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>

                <p className="font-bold text-lg">
                  {item.price}
                </p>

                <div className="flex gap-2">
                  <Button className="flex-1">
                    注文追加 Add
                  </Button>

                  <Button
                    variant="destructive"
                    className="flex-1"
                  >
                    削除 Remove
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Drink Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-500">
            ☕ Drink
          </h2>

          {drinkMenu.map((item) => (
            <Card
              key={item.name}
              className="rounded-3xl shadow-lg"
            >
              <CardHeader>
                <CardTitle>
                  {item.name} / {item.english}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>

                <p className="font-bold text-lg">
                  {item.price}
                </p>

                <div className="flex gap-2">
                  <Button className="flex-1">
                    注文追加 Add
                  </Button>

                  <Button
                    variant="destructive"
                    className="flex-1"
                  >
                    削除 Remove
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Button */}
        <Button className="w-full h-14 rounded-2xl text-lg">
          注文リストへ進む / Go to Order List
        </Button>

      </div>
    </main>
  );
}