import type {Route} from "./+types/home"
import type {DogJson} from "~/domain/dog";

export async function clientLoader({params}: Route.ClientLoaderArgs) {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const dogJson: DogJson = await res.json();
    return dogJson;
}

export default function Home({loaderData}: Route.ComponentProps) {
    const {message, status} = loaderData;
    return (
        <div>
            <div className="flex sm:ml-64">
                <h1>犬</h1>
                <div className="container mx-auto px-4 py-8">
                    <img src={message} alt={status}/>
                </div>
            </div>
        </div>
    );
}
