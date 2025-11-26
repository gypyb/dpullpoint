import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function SetCard({ set }: { set: { id: string; name: string; image: string } }) {
  return (
    <a href={`/collections/${set.id}`}>
      <Card className="overflow-hidden border-white/10 bg-white/5 hover:bg-white/10 transition rounded-2xl">
        <CardContent className="p-3 flex flex-col items-center">
          <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-black/20">
            <Image
              src={set.image}
              alt={set.name}
              fill
              sizes="96px"
              className="object-contain"
            />
          </div>

          <div className="mt-2 text-center">
            <div className="font-medium text-sm">{set.name}</div>
          </div>
        </CardContent>
      </Card>
    </a>
    
  );
}
