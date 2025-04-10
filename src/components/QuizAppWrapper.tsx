import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QuizApp from "./QuizApp";

const queryClient = new QueryClient();

const QuizAppWrapper: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <QuizApp />
        </QueryClientProvider>
    );
};

export default QuizAppWrapper;