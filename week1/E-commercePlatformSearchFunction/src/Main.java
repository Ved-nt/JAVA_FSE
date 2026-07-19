import java.util.Arrays;
import java.util.Comparator;

public class Main {

    // Linear Search
    public static Product linearSearch(Product[] products, int productId) {

        for (Product product : products) {
            if (product.getProductId() == productId) {
                return product;
            }
        }

        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, int productId) {

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {

            int mid = low + (high - low) / 2;

            if (products[mid].getProductId() == productId) {
                return products[mid];
            }

            if (products[mid].getProductId() < productId) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        // -----------------------------
        // Creating Product Objects
        // -----------------------------
        Product[] products = {
                new Product(105, "Laptop", "Electronics"),
                new Product(101, "Shoes", "Fashion"),
                new Product(110, "Watch", "Accessories"),
                new Product(103, "Mobile", "Electronics"),
                new Product(108, "Headphones", "Electronics"),
                new Product(102, "Bag", "Fashion"),
                new Product(106, "Keyboard", "Electronics")
        };

        int searchId = 108;

        System.out.println("======================================");
        System.out.println("LINEAR SEARCH");
        System.out.println("======================================");

        Product result1 = linearSearch(products, searchId);

        if (result1 != null) {
            System.out.println("Product Found");
            System.out.println(result1);
        } else {
            System.out.println("Product Not Found");
        }

        // -------------------------------------
        // Sort array before Binary Search
        // -------------------------------------
        Arrays.sort(products, Comparator.comparingInt(Product::getProductId));

        System.out.println("\n======================================");
        System.out.println("SORTED PRODUCTS");
        System.out.println("======================================");

        for (Product p : products) {
            System.out.println(p.getProductId() + " - " + p.getProductName());
        }

        System.out.println("\n======================================");
        System.out.println("BINARY SEARCH");
        System.out.println("======================================");

        Product result2 = binarySearch(products, searchId);

        if (result2 != null) {
            System.out.println("Product Found");
            System.out.println(result2);
        } else {
            System.out.println("Product Not Found");
        }

        // -------------------------------------
        // Analysis
        // -------------------------------------
        System.out.println("\n======================================");
        System.out.println("TIME COMPLEXITY ANALYSIS");
        System.out.println("======================================");

        System.out.println("Linear Search");
        System.out.println("Best Case    : O(1)");
        System.out.println("Average Case : O(n)");
        System.out.println("Worst Case   : O(n)");

        System.out.println();

        System.out.println("Binary Search");
        System.out.println("Best Case    : O(1)");
        System.out.println("Average Case : O(log n)");
        System.out.println("Worst Case   : O(log n)");

        System.out.println();

        System.out.println("Conclusion:");
        System.out.println("Binary Search is more efficient for large datasets because");
        System.out.println("it repeatedly divides the search space into half.");
        System.out.println("However, it requires the products to be sorted.");
        System.out.println("Linear Search does not require sorting and is suitable");
        System.out.println("for small or unsorted datasets.");
    }
}