import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QuizApp from "./QuizApp";
import { useState } from "react";

const QuizAppWrapper: React.FC = () => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <QuizApp />
        </QueryClientProvider>
    );
};

export default QuizAppWrapper;