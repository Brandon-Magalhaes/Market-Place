"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";
import Image from "next/image";

interface ProductCardProps {
    id: string;
    name: string;
    description?: string;
    sku?: string;
    price: string | number;
    currency: string;
    image: string;
    images?: string[];
}

export default function ProductCard(
    {
        id,
        name,
        description,
        price,
        currency,
        image,
        images,
    }: ProductCardProps) {

    async function addToCart() {

    }


    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center jusitufy-center min-h-[4rem]">{name}e</CardTitle>
                <CardDescription className="relative w-full h-60">
                    <Image
                        src={image}
                        fill
                        sizes="100%"
                        alt={name}
                        className="object-contain" // não deixa o objeto retorcido para o responsivo
                    />
                </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
                <p className="min-h-[6rem]">{description}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
                <div>
                    <p>Preço</p>
                    <p>{price}</p>
                    <Button size={"lg"} variant={"default"} onClick={addToCart}>
                        Comprar
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}