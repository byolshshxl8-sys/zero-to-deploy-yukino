import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-[350px] p-6 space-y-4">
        <CardContent className="space-y-4">
          <h1 className="text-2xl font-bold">
            Yukino Portfolio
          </h1>

          <Input placeholder="メールアドレス" />

          <Button>
            送信
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}