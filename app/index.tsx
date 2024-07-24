import { useRouter } from "expo-router";

export default function index() {

    const router = useRouter();

    router.push('/login');

}