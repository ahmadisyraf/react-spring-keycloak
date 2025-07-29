package isyraf.service.product;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Override
    public List<ProductResponseDTO> getProducts() {
        return Arrays.asList(
                new ProductResponseDTO(1, "Laptop", 2999.99),
                new ProductResponseDTO(2, "Mouse", 79.99),
                new ProductResponseDTO(3, "Keyboard", 149.99)
        );
    }
}
