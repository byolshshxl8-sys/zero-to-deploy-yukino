import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-100 p-8">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* タイトル */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-orange-600">
            OSAKI亭
          </h1>

          <p className="text-gray-600 text-lg">
            美味しいご飯とデザートを楽しめるレストラン
          </p>

          {/* メニューボタン */}
          <div className="flex justify-center gap-4">
            <Button>食べ物</Button>
            <Button variant="secondary">デザート</Button>
            <Button variant="outline">飲み物</Button>
          </div>
        </div>

        {/* メニューカード */}
        <div className="grid gap-6 md:grid-cols-3">

          <Card className="shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle>食べ物</CardTitle>
            </CardHeader>

            <CardContent className="space-y-2">
              <p>🍛 カレーライス</p>
              <p>🍔 ハンバーガー</p>
              <p>🍝 パスタ</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle>デザート</CardTitle>
            </CardHeader>

            <CardContent className="space-y-2">
              <p>🍰 ショートケーキ</p>
              <p>🍨 アイスクリーム</p>
              <p>🧇 ワッフル</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle>飲み物</CardTitle>
            </CardHeader>

            <CardContent className="space-y-2">
              <p>☕ コーヒー</p>
              <p>🧋 タピオカ</p>
              <p>🥤 コーラ</p>
            </CardContent>
          </Card>

        </div>
      </div>
    </main>
  );
}