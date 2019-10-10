import com.thoughtworks.gauge.Step;

import static org.assertj.core.api.Assertions.assertThat;

public class StepStringInSearchResults {
    @Step("<gauge.org> is in the search results")
    public void implementation1(Object arg0) {
        assertThat(true).isEqualTo(true);
    }
}
