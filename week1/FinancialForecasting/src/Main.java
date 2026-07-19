public class Main {

    // Recursive method to calculate future value
    public static double forecast(double currentValue, double growthRate, int years) {

        // Base case
        if (years == 0) {
            return currentValue;
        }

        // Recursive case
        return forecast(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {

        double currentValue = 10000.0;   // Initial investment/value
        double growthRate = 0.08;        // 8% annual growth
        int years = 5;

        System.out.println("========== Financial Forecasting ==========");
        System.out.println("Current Value : ₹" + currentValue);
        System.out.println("Annual Growth Rate : " + (growthRate * 100) + "%");
        System.out.println("Forecast Years : " + years);

        double futureValue = forecast(currentValue, growthRate, years);

        System.out.printf("\nPredicted Future Value after %d years = ₹%.2f%n",
                years, futureValue);

        System.out.println("\nTime Complexity Analysis");
        System.out.println("Best Case    : O(1) (when years = 0)");
        System.out.println("Worst Case   : O(n)");
        System.out.println("Space Complexity : O(n) due to recursion stack");

        System.out.println("\nOptimization");
        System.out.println("1. Use an iterative loop to reduce space complexity to O(1).");
        System.out.println("2. Use Dynamic Programming (Memoization) if recursive");
        System.out.println("   calculations repeat the same subproblems.");
    }
}